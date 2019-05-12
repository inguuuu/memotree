<template lang="html">
    <div>
    <h1>공지사항</h1>
        <table class="rwd-table">
        <tr>
            <th>제목</th>
            <th>날짜</th>
            <th>공지내용</th>
        </tr>
        <tr>
            <td data-th="제목">카카오톡 로그인</td>
            <td data-th="날짜">2018-12-05</td>
            <td data-th="공지내용">카카오톡 로그인 정보가 저장되지 않는 버그가 있습니다.</td>
        </tr>
        <tr>
            <td data-th="제목">다음 맵</td>
            <td data-th="날짜">2018-12-07</td>
            <td data-th="공지내용">테스트 단계입니다. 추후에 저장기능을 넣겠습니다.</td>
        </tr>
         <tr>
            <td data-th="제목">추후일정</td>
            <td data-th="날짜">2018-12-10</td>
            <td data-th="공지내용">디버깅, 오프라인 모드 등등 개발 예정입니다</td>
        </tr>
        </table>
    </div>
</template>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,700";
.rwd-table {
  margin: 1em 0;
  width: 100%;
}
.rwd-table tr {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.rwd-table th {
  display: none;
}
.rwd-table td {
  display: block;
}
.rwd-table td:first-child {
  padding-top: .5em;
}
.rwd-table td:last-child {
  padding-bottom: .5em;
}
.rwd-table td:before {
  content: attr(data-th) ": ";
  font-weight: bold;
  width: 6.5em;
  display: inline-block;
}
@media (min-width: 480px) {
  .rwd-table td:before {
    display: none;
  }
}
.rwd-table th,
.rwd-table td {
  text-align: left;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    display: table-cell;
    padding: .25em .5em;
  }
  .rwd-table th:first-child,
  .rwd-table td:first-child {
    padding-left: 0;
  }
  .rwd-table th:last-child,
  .rwd-table td:last-child {
    padding-right: 0;
  }
}

body {
  padding: 0 2em;
  font-family: sans-serif;
  color: #4fc08d;
  background: #eee;
}

h1 {
  font-weight: normal;
  letter-spacing: -1px;
  color: #34495E;
}

.rwd-table {
  background: #4fc08d;
  color: #fff;
  border-radius: .4em;
  overflow: hidden;
}
.rwd-table tr {
  border-color: #4fc08d;
}
.rwd-table th,
.rwd-table td {
  margin: .5em 1em;
}
@media (min-width: 480px) {
  .rwd-table th,
  .rwd-table td {
    padding: 1em !important;
  }
}
.rwd-table th,
.rwd-table td:before {
  color: #dd5;
}
</style>