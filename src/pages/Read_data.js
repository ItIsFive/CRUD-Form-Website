import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Main from './Main'; 
import './table.css'


export default function Read() {
    useEffect(() => {
        ScrollReveal().reveal('.Table', {
          distance:'10px',
          duration: 2600,
          delay: 250,
          reset: true
        });
      }, []);

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://6572e6de192318b7db413c53.mockapi.io/fakeData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    

    const setData = (data) => {
        let { id, NPM, Nama, Kelas, Jurusan, Nomor } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('NPM', NPM);
        localStorage.setItem('Nama', Nama);
        localStorage.setItem('Kelas', Kelas);
        localStorage.setItem('Jurusan', Jurusan);
        localStorage.setItem('No.HP', Nomor);
        console.log(localStorage)
}


    const onDelete = (id) => {
        var konfirmasi = window.confirm("Delete this data?");
        if(konfirmasi){
            axios.delete(`https://6572e6de192318b7db413c53.mockapi.io/fakeData/${id}`)
            .then(() => {
                alert("Successfully Delete Data");
                getData();
            });
        }
    }

    const getData = () => {
        axios.get(`https://6572e6de192318b7db413c53.mockapi.io/fakeData`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }

    return (
        <div>
            <Main>
                <Table className="Table" singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>NPM</Table.HeaderCell>
                            <Table.HeaderCell>Nama</Table.HeaderCell>
                            <Table.HeaderCell>Kelas</Table.HeaderCell>
                            <Table.HeaderCell>Jurusan</Table.HeaderCell>
                            <Table.HeaderCell>No.HP</Table.HeaderCell>
                            <Table.HeaderCell>Update/Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {APIData.map((data, index) => (
                            <Table.Row key={index}>
                                <Table.Cell>{data.NPM}</Table.Cell>
                                <Table.Cell>{data.Nama}</Table.Cell>
                                <Table.Cell>{data.Kelas}</Table.Cell>
                                <Table.Cell>{data.Jurusan}</Table.Cell>
                                <Table.Cell>{data.Nomor}</Table.Cell>
                                <Table.Cell> 
                                    <Link to='/update'>
                                        <Button onClick={() => setData(data)}>Edit</Button>
                                    </Link>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Main>

        </div>
    )
}