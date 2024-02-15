import React from 'react'

const App = () => {
  return (
    <div>
      <div>
        <h1 className='pt-5 text-4xl font-bold text-center '>
          Personal Port
        </h1>
        <br />
        <br />
        <div className='h-auto w-screen flex justify-center items-center'>
          <a target='_blank' href='https://www.youtube.com/watch?v=HLj_VKhqGPw'><img className='h-auto w-32' src="https://i.pinimg.com/564x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg" alt="cat image" /></a>
        </div>
        <p className='text-center font-bold'>me btw👆</p>
        <br />
        <p className='text-center font-bold font-custom2' >
          Linkedin: <a target='_blank' href='https://www.linkedin.com/in/amaanbilwar' className='underline underline-offset-4'>connect✅</a>
          <br />
          <br />
          Github: <a  target='_blank' href='https://github.com/AmaanBilwar' className='underline underline-offset-4'>make project is fun🔨 + skills give power💪</a>
          <br />
          <br />
          Email: <a target='_blank' href='mailto:bilwarad@mail.uc.edu' className='underline underline-offset-4'>write to me like old days(not really)✉</a>
          <br />
          <br />
          Resume: <a target='_blank' href='https://drive.google.com/file/d/1HzOOF4F5_AMzJr99VcPgXneC5nX5_3Iy/view?usp=sharing' className='underline underline-offset-4'>work in scary real world📜</a>
        </p>
      </div>
    </div>
  )
}

export default App
