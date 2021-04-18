import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [img, setImage] = useState(null)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            img: img,
            price: data.price
        };
        const url = `https://glacial-spire-45117.herokuapp.com/addService`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side'))
    };
    const handleImgUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '79ac44eb2e0cb2a55944e1f08168634d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <div className='text-center form service-from'>
            <div className='row'>
                <div className='col-md-3 sidebar-style'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-2 form-style'>
                    <form className='form-data' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' name="name" defaultValue="service name" ref={register} />
                        <br />
                        <input className='mb-2' name="price" defaultValue="$200" ref={register({ required: true })} />
                        <br />
                        <input className='mt-3 image-field' name="exampleRequired" type="file" onChange={handleImgUpload} />
                        <br />
                        {
                            img ? <p className='mt-4'>Image Upload Success click submit</p> : null
                        }
                        <input className='mt-4' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;