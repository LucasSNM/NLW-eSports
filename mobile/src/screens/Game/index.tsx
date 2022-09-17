
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../components/Background'
import { useRoute } from '@react-navigation/native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Entypo } from '@expo/vector-icons'

import { styles } from './styles'
import { ImageBackground } from 'react-native'
import { GameParams } from '../../@types/navigation'
import { THEME } from '../../theme'
import { useState } from 'react'
import { Heading } from '../../components/Heading'
import { useNavigation } from '@react-navigation/native'
import { DuoCard } from '../../components/DuoCard'




export function Game() {

    const route = useRoute()
    const game = route.params as GameParams
    const navigation = useNavigation()


    function handleGoBack() {
        navigation.goBack()
    }


    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image
                    style={styles.cover}
                    source={{ uri: game.bannerUrl }}
                    resizeMode="cover"
                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />

                <DuoCard id={game.id} />

            </SafeAreaView>
        </Background>
    )
}