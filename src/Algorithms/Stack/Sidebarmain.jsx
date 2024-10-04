import './Sidebarmain.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar_Stack';
import Aim from './Aim';
import Pretest from './Pretest';
import Learning from './Learning';
import Concept from './Concept';
import Demo from './Demo';
import Quiz from './Quiz';
import Posttest from './Posttest';

export default function Sidebarmain() {
    return (
        <BrowserRouter>
            <Sidebar>
                <Routes>
                    <Route path="/" element={<Aim />} />
                    <Route path="/aim" element={<Aim />} />
                    <Route path="/pretest" element={<Pretest />} />
                    <Route path="/concept" element={<Concept />} />
                    <Route path="/learning" element={<Learning />} />
                    <Route path="/Demo" element={<Demo />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/posttest" element={<Posttest/>}/>
                </Routes>
            </Sidebar>
        </BrowserRouter>
    );
}
