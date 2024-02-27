import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import * as Contacts from 'expo-contacts';

const ContactsListScreen = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const {status} = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const {data} = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                });
                if (data.length > 0) {
                    setContacts(data);
                }
            }
        })();
    }, []);

    return (
        <FlatList
            data={contacts}
            renderItem={({item}) => (
                <View style={styles.contactContainer}>
                    <Text style={styles.contactName}>{item.name}</Text>
                    {item.phoneNumbers && item.phoneNumbers.length > 0 && (
                        <View style={styles.phoneNumbersContainer}>
                            {item.phoneNumbers.map((phoneNumber, index) => (
                                <Text key={index} style={styles.phoneNumber}>
                                    {phoneNumber.number}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>
            )}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
        />
    );
};

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contactContainer: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    phoneNumbersContainer: {
        marginTop: 5,
    },
    phoneNumber: {
        fontSize: 16,
        color: '#555',
    },
});

export default ContactsListScreen;
