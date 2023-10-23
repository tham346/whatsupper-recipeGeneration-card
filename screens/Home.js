import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Image } from 'react-native';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <GluestackUIProvider>
                <Box
                    maxWidth={1}
                    maxHeight={700}
                    borderColor={'black'} 
                    padding={65}
                    borderRadius={10}
                    borderWidth={1}
                    >
                    {/* <Text>Recipe Name</Text>*/}
                    {/* <Image></Image> */}

                </Box>
                <Box styles={styles.largeBox}
                    maxWidth={1}
                    maxHeight={700}
                    borderColor={'black'} 
                    padding={65}
                    borderRadius={10}
                    borderWidth={1}               
                >
                    {/* <Image></Image> */}
                    {/* <Text>Recipe Name</Text> */}
                </Box>
            </GluestackUIProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
