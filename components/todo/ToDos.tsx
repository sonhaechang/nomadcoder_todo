import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import ToDo from './ToDo';

type ToDosProps = {
    toDos: any;
    setToDos: any
    working: boolean,
}

function ToDos({ toDos, setToDos, working }: ToDosProps): JSX.Element {
    return (
        <ScrollView>
            {Object.keys(toDos).sort().reverse().map(key => 
                toDos[key].working === working ?
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