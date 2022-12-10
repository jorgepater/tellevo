import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { Title } from '../authStyles';

export default function RegistroDocumento(){

    const [selectedDay, setSelectedDay] = React.useState('');
    const [selectedMonth, setSelectedMonth] = React.useState('');
    const [selectedYear, setSelectedYear] = React.useState('');

    const [fecha, setFecha] = React.useState({
        day: [],
        month: [],
        year: []
    });

    const [countryAndCity, setCountryAndCity] = React.useState({
        country: ['Venezuela', 'Colombia', 'Ecuador'],
        city: ['Bogota', 'Barranquilla', 'Caracas', 'Quito']
    });

    const titleRegistro = (selected) => {
        switch(selected){
            case 'C.C':
                return 'Registro Cédula de Ciudadanía';
            
            case 'Pasaporte':
                return 'Registro Pasaporte';

            case 'Licencia':
                return 'Registro Licencia de conducir';
            
            default: return 'Registro no seleccionado';
        }
    }

    const fechas = () => {
        let date = Date();
        date = date.slice(11, 15);

        let dayAndMonth = 1;
        let yearDate = Number(date);

        let yearArray = [];

        while(yearDate >= 1940){

            if(dayAndMonth <= 12){
                setFecha({
                    ...fecha,
                    month: fecha.month.push(`${dayAndMonth}`)
                });
            }
            if(dayAndMonth <= 31){

                setFecha({
                    ...fecha,
                    day: fecha.day.push(`${dayAndMonth}`)
                });

                dayAndMonth++;
            }

            yearArray.push(`${yearDate}`)
            
            yearDate--;
        }
        setFecha({
            ...fecha,
            year: yearArray
        });
    }

    React.useEffect(() => {
        if(fecha.day.length === 0){
            fechas();
        }
    }, [fecha.year]);

    const stylesSelects = {
        select: {
            width: 75,
            borderRadius: 10,
            height: 35,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'grey'
        },
        dropdownStyle: {
            height: 180,
            borderRadius: 10
        },
        buttonTextStyle: {
            fontSize: 14
        }
    }


    return (
        <View>
            <Title>
                Registro Documento
            </Title>
            
            <View style={styles.containerSelect}>

                <View>
                    <TextInput
                        textAlign={'center'}
                        style={{...styles.input, height: 35, fontSize: 14}}
                        editable={false}
                        placeholderTextColor={'#000'}
                        placeholder="Fecha exp"
                        keyboardType="text"
                    />  
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Día</Text>
                    <SelectDropdown
                        buttonTextStyle={stylesSelects.buttonTextStyle}
                        dropdownStyle={stylesSelects.dropdownStyle}
                        buttonStyle={stylesSelects.select}
                        defaultButtonText='Día'
                        renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                        data={fecha.day}
                        onSelect={(selectedItem) => {
                            setSelectedDay(selectedItem)
                        }}
                    />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Mes</Text>
                    <SelectDropdown
                        buttonTextStyle={stylesSelects.buttonTextStyle}
                        dropdownStyle={stylesSelects.dropdownStyle}
                        buttonStyle={stylesSelects.select}
                        defaultButtonText='Mes'
                        renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                        data={fecha.month}
                        onSelect={(selectedItem) => {
                            setSelectedMonth(selectedItem)
                        }}
                    />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Año</Text>
                    <SelectDropdown
                        buttonTextStyle={stylesSelects.buttonTextStyle}
                        dropdownStyle={stylesSelects.dropdownStyle}
                        buttonStyle={{...stylesSelects.select, width: 90}}
                        defaultButtonText='Año'
                        renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                        data={fecha.year}
                        onSelect={(selectedItem) => {
                            setSelectedYear(selectedItem)
                        }}
                    />
                </View>
            </View>

            <View>
                <TextInput
                    textAlign={'center'}
                    style={{...styles.input, marginTop: 15, marginBottom: 10}}
                    editable={false}
                    placeholderTextColor={'#000'}
                    placeholder="Lugar de expedición"
                    keyboardType="text"
                />  
            </View>

            <View style={{...styles.containerSelect}}>
                    <View style={{alignItems: 'center', width: '49%'}}>
                        <Text>País de Expedición</Text>
                        <SelectDropdown
                            buttonTextStyle={{fontSize: 14}}
                            dropdownStyle={{...stylesSelects.dropdownStyle, height: 'auto'}}
                            buttonStyle={{...stylesSelects.select, width: '100%'}}
                            defaultButtonText='País de Expedición'
                            renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                            data={countryAndCity.country}
                            onSelect={(selectedItem) => {
                                setSelectedYear(selectedItem)
                            }}
                        />
                    </View>

                    <View style={{alignItems: 'center', width: '49%'}}>
                        <Text>Cuidad</Text>
                        <SelectDropdown
                            buttonTextStyle={{fontSize: 14}}
                            dropdownStyle={stylesSelects.dropdownStyle}
                            buttonStyle={{...stylesSelects.select, width: '99.9%'}}
                            defaultButtonText='Cuidad'
                            renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                            data={countryAndCity.city}
                            onSelect={(selectedItem) => {
                                setSelectedYear(selectedItem)
                            }}
                        />
                    </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerSelect: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        backgroundColor: '#5F9DF7',
        borderRadius: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        height: 45,
        maxWidth: '100%',
        borderWidth: 1,
        borderColor: '#B2B2B2',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#B2B2B2',
        fontSize: 17,
    },
})
