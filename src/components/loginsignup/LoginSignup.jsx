import './LoginSignup.css'


export default function LoginSignup(){

    return(
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <img src='' alt=''></img>
                    <input type='text' placeholder='Name'></input>
                </div>

                <div className='input'>
                    <img src='' alt=''></img>
                    <input type='text' placeholder='e mail'></input>
                </div>

                <div className='input'>
                    <img src='' alt=''></img>
                    <input type='text' placeholder='password'></input>
                </div>
                

            </div>
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
                <div className='submit-container'>
                    <div className='submit'>sign up</div>
                    <div className='submit'>log in</div>

                </div>




        </div>
    )


}


