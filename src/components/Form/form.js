import styles from './form.css'
import { useState } from 'react';
const Form=()=>{
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [language,setLanguage]=useState('')
  const [interest,setInterest]=useState('')
  const [level,setlevel]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    // const details={title,body,expNum};
    // console.log(details);
  }
    return(
        <div className="create">
            <h2>Add your skills</h2>
            <form onSubmit={handleSubmit}>
                <label>Degree</label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                {/* <label>Area of interest</label>
                <textarea  value={body}
                onChange={(e)=>setBody(e.target.value)}>
                    
                </textarea> */}
                {/* <label>Prior years of experience</label>
                <input type="number" required value={expNum}
                onChange={(e)=>setexpNum(e.target.value)}/> */}

                <label>Area of interest</label>
                <select value={interest} onChange={(e)=>setInterest(e.target.value)}>
                  <option value="Software Development">Software Development</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Manager">Manager</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Software Development">Software Development</option>
                </select>

                <label>Level</label>
                <select value={level} onChange={(e)=>setlevel(e.target.value)}>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  
              
                </select>
                <label>Language</label>
                <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                  <option value="Other">Other</option>
                  
              
                </select>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;