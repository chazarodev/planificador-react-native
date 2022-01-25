import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View>
            <Text style={styles.texto}>Planificador de Gastos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 20
    }
})

export default Header;
