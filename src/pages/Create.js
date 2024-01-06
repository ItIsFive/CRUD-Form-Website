import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Main from './Main'; 
import axios from 'axios';
import './Create_form.css';
import ScrollReveal from 'scrollreveal'

export default function Create() {
    const [NPM, setNPM] = useState('');
    const [Nama, setNama] = useState('');
    const [Kelas, setKelas] = useState('');
    const [Jurusan, setJurusan] = useState('');
    const [Nomor, setNomor] = useState('');

    useEffect(() => {
        ScrollReveal().reveal('.create-form', {
          distance:'10px',
          duration: 2600,
          delay: 250,
          reset: true
        });
      }, []);

    const postData = () => {

        axios.post('https://6572e6de192318b7db413c53.mockapi.io/fakeData', {
            NPM,
            Nama,
            Kelas,
            Jurusan,
            Nomor,
        }).then(() => {
            alert('Data Saved')
            
            window.location.href = "/read";
        })
    }

    const clearBtn = () => {
        const form = document.querySelector('.create-form');
        form.reset(); 
    };
    
    return (
        <div>
            <Main>
                <Form className="create-form">
                    <Form.Field>
                        <label>NPM</label>
                        <input placeholder='NPM' onChange={(e) => setNPM(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Nama</label>
                        <input placeholder='Nama' onChange={(e) => setNama(e.target.value)} />
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
                        <label>No. Handphone</label>
                        <input placeholder='No. HP' onChange={(e) => setNomor(e.target.value)}/>
                    </Form.Field>
                    <Button onClick={postData} type='submit'>Submit</Button>
                    <Button onClick={clearBtn} type='submit'>Clear</Button>
                </Form>
            </Main>
        </div>
    )
}