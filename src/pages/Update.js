import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import Main from './Main'; 
import ScrollReveal from 'scrollreveal';


export default function Update() {
    const [id, setID] = useState(null);
    const [NPM, setNPM] = useState('');
    const [Nama, setNama] = useState('');
    const [Kelas, setKelas] = useState('');
    const [Jurusan, setJurusan] = useState('');
    const [Nomor, setNomor] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setNPM(localStorage.getItem('NPM')); 
        setNama(localStorage.getItem('Nama'));
        setKelas(localStorage.getItem('Kelas'));
        setJurusan(localStorage.getItem('Jurusan'));
        setNomor(localStorage.getItem('No.HP'));

         ScrollReveal().reveal('.create-form', {
            distance:'10px',
            duration: 2600,
            delay: 250,
            reset: true
            });
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6572e6de192318b7db413c53.mockapi.io/fakeData/${id}`, {
            NPM,
            Nama,
            Kelas,
            Jurusan,
            Nomor,
        }).then(() => {
            alert('Data berhasil diperbarui')
            window.location.href = "/read";
        })
        
    };

    const clearBtn = () => {
        setNPM('');
        setNama('');
        setKelas('');
        setJurusan('');
        setNomor('');
    };

    return (
        <div>
            <Main>
            <Form className="create-form">
            <Form.Field>
                    <label>NPM</label>
                    <input placeholder='NPM' value={NPM} onChange={(e) => setNPM(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nama</label>
                    <input placeholder='Nama' value={Nama} onChange={(e) => setNama(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Kelas</label>
                    <input placeholder='Kelas' value={Kelas} onChange={(e) => setKelas(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Jurusan</label>
                    <input placeholder='Jurusan' value={Jurusan} onChange={(e) => setJurusan(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>No. Handphone</label>
                    <input placeholder='No. HP' value={Nomor} onChange={(e) => setNomor(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                <Button type='submit' onClick={clearBtn} >Clear</Button>
            </Form>
            </Main>
        </div>
    )
}