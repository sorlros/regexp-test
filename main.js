let str = `
010-1234-5678
neo@gmail.com
https://heropy.blog/2018/10/28/regexp/
They are gone.
grown
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

//const regexp = new RegExp('the', 'gi')
// 'the'를 찾아 배열방식으로 나타낼때 옵션 'g', 대소문자관계없이 찾을때는 'gi'

//const regexp = /blog/gi
//console.log(str.match(regexp))
//console.log(regexp.test(str)) // true 
//console.log(str.replace(regexp, 'AAA'))
//str = str.replace(regexp, 'AAA')

//const regexp = /regexp/g
//console.log(str.match(/\.$/gim))

// /.$/ $는 문자열의 마지막 부분 >> 문자열의 마지막에 .이 있는지 확인
// /.$/gim >> 각각의 줄의 마지막에 .이 붙어있는지 확인

// console.log(
//   str.match(/d$/gm)
// )

// console.log(
//   str.match(/^h/gm)
// )

// console.log(
//   str.match(/h..p/g)
// )

// console.log(
//   str.match(/regexp|gone/g)
// )

// console.log(
//   str.match(/https?/g)
// )
// ?앞의 문자인 s가 있거나 없어도 그 앞의 http가 일치하다면 반환

// console.log(
//   str.match(/\b\w{2,3}\b/g)
// )

// console.log(
//   str.match(/[0-9]{1,}/g)
// )

// console.log(
//   str.match(/[가-힣]/g)
// )

// console.log(
//   str.match(/\w/g)
// )

// console.log(
//   str.match(/\bg\w{1,}\b/g) // 소문자 g로 시작하는 모든 영단어를 검색
// )

// console.log(
//   str.match(/\d{1,}/g)
// )

// const h = `  the hello  world   !

// `
// console.log(
//   h.match(/\s/g)
// )
// console.log(
//   h.replace(/\s/g, '')

// console.log(
//   str.match(/\s/g)
// )

console.log(
  str.match(/.{1,}(?=@)/g)
)
// @ 앞에 모든 문자찾기

console.log(
  str.match(/(?<=@).{1,}/g)
)