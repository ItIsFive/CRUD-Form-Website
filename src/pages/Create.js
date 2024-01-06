import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Main from './Main'; 
import axios from 'axios';
import './Create_form.css';

export default function Create() {
    const [NPM, setNPM] = useState('');
    const [Nama, setNama] = useState('');
    const [Kelas, setKelas] = useState('');
    const [Jurusan, setJurusan] = useState('');
    const [Nomor, setNomor] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    const postData = () => {
        axios.post('https://6572e6de192318b7db413c53.mockapi.io/fakeData', {
            NPM,
            Nama,
            Kelas,
            Jurusan,
            Nomor,
            checkbox,
        }).then(() => {
            alert('Data Saved')
            
            window.location.href = "/read";
        })
    }
    return (
        <div>
            <Main>
                <Form className="create-form">
                    <Form.Field>
                        <label>NPM</label>
                        <input placeholder='NPM' onChange={(e) => setNPM(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' onChange={(e) => setNama(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Kelas</label>
                        <input placeholder='Kelas' onChange={(e) => setKelas(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Jurusan</label>
                        <input placeholder='Jurusan' onChange={(e) => setJurusan(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>No. HP</label>
                        <input placeholder='No. HP' onChange={(e) => setNomor(e.target.value)}/>
                    </Form.Field>
                    <Form.Field >
                        <div className="checkbox-wrapper">
                            <label>
                                I agree to the Terms and Conditions
                            </label>
                            <Checkbox onChange={(e) => setCheckbox(!checkbox)} />
                        </div>
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Submit</Button>
                </Form>
            </Main>
        </div>
    )
}