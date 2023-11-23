// import { Todos } from '@entities/todos'
// import { Meta } from '@shared/meta'
// // const delay = (ms: number) => {
// //   return new Promise((res) => {
// //     setTimeout(() => res(true), ms)
// //   })
// // }

import { Todos } from '@entities/todos'

// export const HomePage = () => {
//   return (
//     <>
//       <Meta description="Unistory" title="Unistory" />
//       <div className="flex justify-center gap-10">
//       </div>
//     </>
//   )
// }
export function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <Todos />
      <ul>
        <li>Rendered to HTML.</li>
        <li>Interactive. 123</li>
      </ul>
    </>
  )
}
