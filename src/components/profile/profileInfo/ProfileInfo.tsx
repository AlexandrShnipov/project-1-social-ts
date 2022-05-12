import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
       <>
           <div className={s.contentImgWrap}>
               <img className={s.contentImg} src="https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg" alt="img"/>
           </div>
           <div className={s.contentUserInfo}>
               <div className={s.contentUserImgWrap}>
                   <img className={s.contentUserImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdEPqcUgJTPoW3EWxZhS5fTyPqtlzAd4W_t9eK2TRjgxH2S13YZ0NYLRv_U-8zY-SQ_2U&usqp=CAU" alt="user"/>
               </div>
               <div className={s.contentUserDescription}>
                   user description
               </div>
           </div>
       </>
    )
}

export default ProfileInfo;