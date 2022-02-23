//string 문자열 3개 처리하기
const a = 'ABC';
const b = 'ACC';
const c = 'ABC';

if(a === b && b === c) alert('Very Good');
else if(a !== b && a !== c && b !== c) alert('Only one');
else alert('Two');
