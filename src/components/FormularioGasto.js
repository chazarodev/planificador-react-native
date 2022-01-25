import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FormularioGasto = ({setModal, handleGasto, gasto, setGasto, eliminarGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (gasto?.nombre) {
            setNombre(gasto.nombre)
            setCantidad(gasto.cantidad)
            setCategoria(gasto.categoria)
            setFecha(gasto.fecha)
            setId(gasto.id)
        }
    }, [gasto])

    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorBtn}>
                <Pressable 
                    style={[styles.btn, styles.btnCancelar]}
                    onLongPress={() => {
                        setModal(false)
                        setGasto({})
                    }}
                >
                    <Text style={styles.btnTexto}>Cancelar</Text>
                </Pressable>
                { !!id && (
                    <Pressable 
                        style={[styles.btn, styles.btnEliminar]}
                        onLongPress={() => eliminarGasto(id)}
                    >
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable>
                )}
            </View>
            <View style={styles.formulario}>
                <Text style={styles.titulo}>{gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Gasto</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre del gasto. Ej: Comida'
                        onChangeText={setNombre}
                        value={nombre}
                        />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Cantidad Gasto</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Cantidad del gasto. Ej: $200.00'
                        keyboardType='numeric'
                        onChangeText={setCantidad}
                        value={cantidad}
                    />
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Categoría Gasto</Text>
                    <Picker 
                        style={styles.input}
                        selectedValue={categoria}
                        onValueChange={(valor) => {setCategoria(valor)}}    
                    >
                        <Picker.Item label="--Seleccione--" value="" />
                        <Picker.Item label="Comida" value="comida" />
                        <Picker.Item label="Ahorro" value="ahorro" />
                        <Picker.Item label="Salud" value="salud" />
                        <Picker.Item label="Casa" value="casa" />
                        <Picker.Item label="Ocio" value="ocio" />
                        <Picker.Item label="Suscripciones" value="suscripciones" />
                        <Picker.Item label="Gastos Varios" value="gastos" />
                    </Picker>
                </View>
                <Pressable
                    style={styles.submitBtn}
                    onPress={() => handleGasto({nombre, cantidad, categoria, id, fecha})}
                >
                    <Text style={styles.submitBtnTexto}>
                        {gasto?.nombre ? 'Guardar Cambios' : 'Agregar Gasto'}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40AF',
        flex: 1
    },
    contenedorBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        flex: 1
    },
    btnCancelar: {
        backgroundColor: '#DB2777',
    },
    btnEliminar: {
        backgroundColor: 'red'
    },
    btnTexto: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FFF'
    },
    formulario: {
        ...globalStyles.contenedor
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B'
    },
    campo: {
        marginVertical: 10
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        marginTop: 20
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default FormularioGasto
