import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ref, update } from 'firebase/database';
import { firebaseRef } from '../../firebase-config';

const ToDoItem = () => {
    const [doneState, setDone] = useState(false);
    const onCheck = (isChecked) => {
        console.log("🚀 ===> onCheck ~ isChecked:", isChecked)
        setDone(isChecked);
        update(ref(firebaseRef, '/todos'), {
          [id]: {
            title,
            done: !doneState,
          },
        });
      };
    return (
        <View style={styles.todoItem}>
            <CheckBox onValueChange={onCheck} value={doneState} />
            <Text style={[styles.todoText, { opacity: doneState ? 0.2 : 1 }]}>
                A random To-Do item
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    todoText: {
        paddingHorizontal: 5,
        fontSize: 16
    },
});


export default ToDoItem;