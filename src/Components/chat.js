import React, {useState, useEffect} from 'react';
import {db} from '../firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore"; 