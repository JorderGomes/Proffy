import React from 'react';
// import { Link } from 'react-router-dom';
// import LogoImg from '../../assets/images/logo.svg';
// import BackIcon from '../../assets/images/icons/back.svg';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/select';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis" >
                <form id="search-teachers">
                    <Select 
                            name="subject" 
                            label="Matéria"
                            options={[
                                {value: 'React', label: 'React' },
                                {value: 'Vue', label: 'Vue' },
                                {value: 'Design', label: 'Design' },
                                {value: 'PDS', label: 'PDS' }
                            ]}
                            />
                    
                    <Select 
                            name="week_day" 
                            label="Dia da semana"
                            options={[
                                {value: '0', label: 'Domingo' },
                                {value: '1', label: 'Segunda-feira' },
                                {value: '2', label: 'Terça-feira' },
                                {value: '3', label: 'Quarta-feira' },
                                {value: '4', label: 'Quinta-feira' },
                                {value: '5', label: 'Sexta-feira' },
                                {value: '6', label: 'Sábado' }
                            ]}
                            />

                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;