<template>
  <div>
      
    <h1 class="hhh1">
        
         <i class="me">Mapº</i><i class="tree">Memo</i>
    </h1>
    
    <vue-daum-map 

      :appKey="appKey"

      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"

      @load="onLoad"

      @center_changed="onMapEvent('center_changed', $event)"
      @zoom_start="onMapEvent('zoom_start', $event)"
      @zoom_changed="onMapEvent('zoom_changed', $event)"
      @bounds_changed="onMapEvent('bounds_changed', $event)"
      @click="onMapEvent('click', $event)"
      @dblclick="onMapEvent('dblclick', $event)"
      @rightclick="onMapEvent('rightclick', $event)"
      @mousemove="onMapEvent('mousemove', $event)"
      @dragstart="onMapEvent('dragstart', $event)"
      @drag="onMapEvent('drag', $event)"
      @dragend="onMapEvent('dragend', $event)"
      @idle="onMapEvent('idle', $event)"
      @tilesloaded="onMapEvent('tilesloaded', $event)"
      @maptypeid_changed="onMapEvent('maptypeid_changed', $event)"

      style="width:100%;height:290px;">
    </vue-daum-map>

    <div id="menu_wrap" class="bg_white">
    
         <input type="text" v-model="keyword" placeholder="검색할 위치를 입력하세요." size="15"> 
         <i class="mbox" @click="searchPlaces()">검색하기</i> 
   
        <input class="minputbox" type="text"  v-model="mTitle" size="15" placeholder="제목"> 
        </div>
        <div>
        <input class="minputbox" type="text"  v-model="mContents" size="15" placeholder="내용"> 
         </div>
         <div class="mbox2" v-on:click="MemoOn">작성하기</div>
         <ul id="placesList" class="placesList"></ul>
           <div id="pagination" class="placesList" ></div>
    <table>
      <colgroup>
        <col width="80px" />
        <col />
      </colgroup>
      <tr>
        <th>거리조절</th>
        <td><input type="range" min="1" max="14" v-model.number="level"> {{level}}</td>
      </tr>
    </table>
   <MapModal v-on:mapInsertTodo="mapInsertTodo" v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">할 일을 입력하세요.
        <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
      </span>
    </MapModal>
  </div>
</template>

<script>
  import VueDaumMap from 'vue-daum-map';
  import config from './config';
  import MapModal from './common/MapModal.vue'
  export default {
    name: 'App',
    components: {VueDaumMap,MapModal: MapModal},
    data: () => ({
      appKey: config.appKey,
      center: {lat:37.58748992751299, lng:126.96559187871146},
      level: 8,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: ['services', 'clusterer', 'drawing'],
      mapObject: null,
      markers:[],
      keyword:'',
      showModal:false,
      mTitle:'',
      mContents:'',
      mdetailaddr:"",
      memoOn:false
    }),
    methods: {
        back(){
      this.$router.push('/');
      this.$store.commit('refresh');
    },
 onLoad (map) {
      
var marker = new daum.maps.Marker({ 
    map: map, 
    position: map.getCenter() 
}); 
// 지도에 마커를 표시합니다
marker.setMap(map);

      
        

let a = this;
daum.maps.event.addListener(map, 'click', function(mouseEvent) {      
 
    var latlng = mouseEvent.latLng; 
    marker.setPosition(latlng);
     var content='';
     a.searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
        if (status === daum.maps.services.Status.OK) {
        var detailAddr  =  result[0].address.address_name ;
        a.mdetailaddr= detailAddr;
            console.log(detailAddr);
            var lat =latlng.getLat().toString();
    var lng =latlng.getLng().toString();
    setTimeout(()=>2000);
    console.log(latlng)
    console.log("상세주소"+a.mdetailaddr);
    var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title"> ' +a.mTitle+
                      
                       
            '        </div>' + 
            '        <div class="body">' + 
            
            '            <div>' + 
            '                <div class="ellipsis">' +a.mContents+'</div>' + 
            
            '            </div>' + 
            '        </div>' +
           // '<a href="http://map.daum.net/link/to/Hello World!,33.450701,126.570667">길찾기</a></div>'+
           '<a class="findbtn" href="http://map.daum.net/link/to/'+a.mdetailaddr+','+lat+','+lng+'"style="color:blue" target="_blank">길찾기</a></div>'+
         //    '<a href='+"http://map.daum.net/link/to/,"+latlng.getLat()+","+latlng.getLng()+">"+'길찾기</a> '+
            '    </div>' +    
    console.log(lng);
   console.log(lat);
    console.log("daum.maps.event.addListener: this.mtitel: " +a.mTitle)
      if(a.memoOn==true&a.mTitle!=''&&a.mContents!=''){
    var overlay = new daum.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
});
a.memoOn=false;
a.mTitle='';
a.mContents='';
}else{
    alert("빈칸입니다. 입력창을 채워주세요.");
}

        }   
    });
    
    
   
    
    // 마커 위치를 클릭한 위치로 옮깁니다
    
     
   // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
   // message += '경도는 ' + latlng.getLng() + ' 입니다';
   // console.log(latlng);
   /*if(a.memoOn==true){
    var overlay = new daum.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition()       
});
a.memoOn=false;
}*/

  
});
        var infowindow = new daum.maps.InfoWindow({zIndex:1  ,removable : true})
        

        var bounds = map.getBounds();
        // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
        var boundsStr = bounds.toString();
        console.log('Daum Map Loaded', boundsStr);
        this.mapObject = map;

daum.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
});
        
},
      onMapEvent (event, params) {
        console.log(`Daum Map Event(${event})`, params);
      },

test(map){
    console.log("test");
    var marker = new daum.maps.Marker({ 
    map: map, 
    position: map.getCenter() 
}); 
    daum.maps.event.addListener(marker, 'click', function() {
    overlay.setMap(map);
});
},
searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    var geocoder = new daum.maps.services.Geocoder(); 
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
},
 displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new daum.maps.Marker({
        map: this.mapObject,
        position: new daum.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    daum.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
},
      placesSearchCB (data, status, pagination,map) {
    if (status === daum.maps.services.Status.OK) {

            // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        this.displayPlaces(data);

        // 페이지 번호를 표출합니다
        this.displayPagination(pagination);
    }
    else if (status === daum.maps.services.Status.ZERO_RESULT) {

        alert('검색 결과가 존재하지 않습니다.');
        return;

    } else if (status === daum.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;

    } 
},
 displayPlaces(places) {

    var listEl = document.getElementById('placesList'), 
    menuEl = document.getElementById('menu_wrap'),
    fragment = document.createDocumentFragment(), 
    bounds = new daum.maps.LatLngBounds(), 
    listStr = '';
    
    // 검색 결과 목록에 추가된 항목들을 제거합니다
    this.removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거합니다
    this.removeMarker();
    var i=0;
    //for ( var i=0; i<places.length; i++ ) {

        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new daum.maps.LatLng(places[i].y, places[i].x),
            marker = this.addMarker(placePosition, i), 
            itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
      console.log(placePosition.ib);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);

        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function(marker, title) {
            daum.maps.event.addListener(marker, 'mouseover', function() {
                displayInfowindow(marker, title);
            });

            daum.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();
            });

            itemEl.onmouseover =  function () {
                this.displayInfowindow(marker, title);
            };

            itemEl.onmouseout =  function () {
                infowindow.close();
            };
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
    //}

    // 검색결과 항목들을 검색결과 목록 Elemnet에 추가합니다
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    this.mapObject.setBounds(bounds);
},
getListItem(index, places) {

    var el = document.createElement('li'),
    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
                '<div class="info">' +
                '   <h5>' + places.place_name + '</h5>';

    if (places.road_address_name) {
        itemStr += '    <span>' + places.road_address_name + '</span>' +
                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
    } else {
        itemStr += '    <span>' +  places.address_name  + '</span>'; 
    }
                 
      itemStr += '  <span class="tel">' + places.phone  + '</span>' +
                '</div>';           

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
},
addMarker(position, idx, title) {
    var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new daum.maps.Size(36, 37),  // 마커 이미지의 크기
        imgOptions =  {
            spriteSize : new daum.maps.Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin : new daum.maps.Point(0, (idx*46)+10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new daum.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new daum.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage 
        });

    marker.setMap(this.mapObject); // 지도 위에 마커를 표출합니다
    this.markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    return marker;
},
displayPagination(pagination) {
    var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i; 

    // 기존에 추가된 페이지번호를 삭제합니다
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild (paginationEl.lastChild);
    }

    for (i=1; i<=pagination.last; i++) {
        var el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i===pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function(i) {
                return function() {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
},
displayInfowindow(marker, title) {
    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);
},
clickDisplayMarker(){
   var marker = new daum.maps.Marker();

},


// 지도 위에 표시되고 있는 마커를 모두 제거합니다
 removeMarker() {
    for ( var i = 0; i < this.markers.length; i++ ) {
        this.markers[i].setMap(null);
    }   
    this.markers = [];
},

removeAllChildNods(el) {   
    while (el.hasChildNodes()) {
        el.removeChild (el.lastChild);
    }
},


searchPlaces() {
 var ps = new daum.maps.services.Places();  
 console.log(ps);
 

    if (!this.keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch( this.keyword, this.placesSearchCB); 
},

    closeOverlay(overlay) {
    overlay.setMap(null);     
    },
    openModal(){
      this.showModal = true;
    },
    MemoOn(){
      this.memoOn = true;
    },
    mapInsertTodo(title,contents) {
        this.mTitle=title;
     this.mContents=contents
      this.showModal = false;
      console.log(title)
      console.log(contents)
      console.log(this.mTitle);
    console.log(this.mContents);
    },

    },
  
    computed:{
      title1:function(){
          var title1 = this.mTitle
              return title1;
    },
    }
  }
</script>
  <style>
  .minputbox{ 
       margin-top:5px;
       height:20px;
      width:100%;
  }
  .bg_white{
      margin-top:20px;
  }
   .hhh1 {
    margin-top:10px;
   font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:30px;
    padding-right: 15px;
    float: center;
  }
  .backBtn2{
    float: left;
    font-size: 20px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .me{
      color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.4em;
    padding-left:0.2em;
    font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
  
  }
  .tree{
     font-family: Georgia , Times ,serif;
    font-weight: 900;
    font-size:25px;
   
  }
  .placesList{
      display:none;
      list-style-type : none;
      background:#c7c7c7;
  }
  .mbox{
       text-decoration:none;
   color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.2em;
    padding-right:0.2em;
    font-weight: 900;
    font-size:15px;
  }
  .mbox2{
      margin-top:10px;
      width:100%;
       text-decoration:none;
    color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.2em;
    padding-right:0.2em;
    font-weight: 900;
    font-size:15px;
  }
    .wrap {position: absolute;left: 0;bottom: 3px;width: 120px;height: 132px;margin-left: -60px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
    .wrap * {padding: 0;margin: 0;}
    .wrap .info {width: 120px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
    .info .title {padding: 5px 0 0 10px;height: 30px;background: #4fc08d;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
    .info .findbtn 
    {
        display:flex;
        float:right;
        text-align:center;
     width:50%;
     font-weight: bold;
    text-decoration:none;
    color:#ffffff;
     background:#4fc08d;
     border-radius: 2em;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    padding-left:0.2em;
    padding-right:0.2em;
    font-weight: 900;
    font-size:15px;}
    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
    .info .close:hover {cursor: pointer;}
    .info .body {position: relative;overflow: hidden;}
    .info .desc {position: relative;margin: 13px 0 0 90px;height: 75px;}
    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
    .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
    .info .link {color: #5085BB;}
</style>