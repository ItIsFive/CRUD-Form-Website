import React, { useEffect, useState } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react'
import axios from 'axios';
import Main from './Main'; 


export default function Update() {
    const [id, setID] = useState(null);
    const [NPM, setNPM] = useState('');
    const [Name, setName] = useState('');
    const [Kelas, setKelas] = useState('');
    const [Jurusan, setJurusan] = useState('');
    const [Nomor, setNomor] = useState('');
    const [checkbox, setCheckbox] = useState(false);


    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setNPM(localStorage.getItem('NPM'));
            setName(localStorage.getItem('Name'));
            setKelas(localStorage.getItem('Kelas'));
            setJurusan(localStorage.getItem('Jurusan'));
            setNomor(localStorage.getItem('No.HP'));
            setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6572e6de192318b7db413c53.mockapi.io/fakeData/${id}`, {
            NPM,
            Name,
            Kelas,
            Jurusan,
            Nomor,
            checkbox
        }).then(() => {
            alert('Data berhasil diperbarui')
            window.location.href = "/read";
        })
    }

    return (
        <div>
            <Main>
            <Form className="create-form">
            <Form.Field>
                    <label>NPM</label>
                    <input placeholder='NPM' value={NPM} onChange={(e) => setNPM(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)}/>
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
                    <label>No. HP</label>
                    <input placeholder='No. HP' value={Nomor} onChange={(e) => setNomor(e.target.value)}/>
                </Form.Field>
                <Form.Field >
                        <div className="checkbox-wrapper">
                            <label>
                                I agree to the Terms and Conditions
                            </label>
                            <Checkbox onChange={(e) => setCheckbox(!checkbox)} />
                        </div>
                    </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
            </Main>
        </div>
    )
}