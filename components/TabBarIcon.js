import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabBarIcon(props) {
    return (
        <Ionicons
            name={props.name}
            size={26}
            //color={props.focused ? '##50DFC2' : 'grey'}
            style={{ marginBottom: -3 }}
        />
    );
}