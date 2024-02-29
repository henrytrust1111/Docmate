import './Setnewpassword.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Setnewpassword =()=>{
  // const nav = useNavigate ();
  // const [loading, setLoading] = useState(false)

  // const schema = yup.object().shape({

  //   newpassword: yup.string().newpassword().required("Set your new password"),
  //   confirmnewpassword: yup.string().required("password is required"),


  // })

  // const { register,
  //   handlesubmit,
  //   formState: {erros},

  // }= useForm({
  //   resolver: yupResolver(schema),

  // });


  // const onSubmit = async (data) => {

  //   try{
  //     setLoading (true);
  //     const res = await axios.post(
  //       "#",
  //       data

  //     );

  //     console.log(res)
  //     const resetIformation = res.data.data
  //     localStorage.setItem("reset", JSON.stringify({id: resetIformation._id, newpassword:resetIformation}))
    
  //   }



  // } 

  



    return(
 <>
   <div className='Setnewpasswordpage'>
    <div className='Setnewpasswordmainpage'>
      <div className='Setnewpasswordmainbody'>
        <div className='SetnewpasswordBody'>
          <div className='SetnewpasswordBodyleft'>
            <div className='DocmatepasswordBodyleft'>
              <div className='DocmatepasswordLogo'>
                <img src="public/docmate3.png" alt="" />
              </div>
            </div>
            <div className='newpasswordBodyleftpicturebox'>
              <div className='SetnewpasswordBodyleftpicture'></div>
            </div>
          </div>
          <div className='SetnewpasswordBodyright'>
            <div className='SetnewpasswordBodyrightwrapper'>
              <div className='MainSetNewpasswordBodyright'>
                <h3>Set a New Password</h3>
              </div>
              <div className='MainSetNewpasswordBoxem'></div>
              <div className='MainSetNewpasswordBox'>
                <input type="text" placeholder='New password' />
              </div>
              <div className='MainconfirmpasswordBoxem'></div>
              <div className='MainconfirmpasswordBox'>
                <input type="text" placeholder='Confirm New Password' />
              </div>
              <div className='ConfirmpasswordBodyrightem'></div>
              <div className='ConfirmpasswordBodyright'>
               <Link to="/Passwordresetsuc">
               <button>Confirm Pasword</button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
 
 
 
 
 </>



    )
}

export default Setnewpassword