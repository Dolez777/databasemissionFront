import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";
import Games from './Games';

const URL = 'http://localhost/databasemissionBack/';

export default function Body({ url }) {

  
  return ( 
    <Games url={URL} />
  ); 
}
