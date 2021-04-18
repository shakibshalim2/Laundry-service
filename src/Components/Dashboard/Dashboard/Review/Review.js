import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';
import './Review.css';
const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [data, setData] = useState({})
    const handleBlur = (e) => {
        console.log(e.target.value, 'working');
        const newInfo = {
            ...data
        }

        newInfo[e.target.name] = e.target.value
        setData(newInfo)
    }
    const onSubmit = () => {
        const allData = { ...data }
        const url = `http://localhost:5000/addTestimonials`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(allData)
        })
    };

    return (
        <div className='container text-center form'>
            <div className='row'>
                <div className='col-md-6 sidebar-style'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-6 form-style'>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input onBlur={handleBlur} className='mb-2' name="name" defaultValue="Your Name" ref={({ required: true })} />
                        <br />
                        <input onBlur={handleBlur} className='mb-2' name="from" defaultValue="Your country" ref={({ required: true })} />
                        <br />

                        <textarea onBlur={handleBlur} name="quote" style={{ fontFamily: 'sans-serif', fontSize: '1.2em' }}>
                            Hey... say something!
                        </textarea>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Review;