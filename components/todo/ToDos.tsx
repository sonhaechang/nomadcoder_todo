import React from 'react';
import { ScrollView } from 'react-native';
import ToDo from './ToDo';

type ToDosProps = {
    toDos: any;
    setToDos: any
    currentPage: string,
}

function ToDos({ toDos, setToDos, currentPage }: ToDosProps): JSX.Element {
    return (
        <ScrollView>
            {Object.keys(toDos).sort().reverse().map(key => 
                toDos[key].currentPage === currentPage ?
                ( 
                    <ToDo 
                        key={key}
                        id={key}
                        toDos={toDos}
                        setToDos={setToDos} 
                    />
                ) : null
            )}
        </ScrollView>
    )
}

export default ToDos;