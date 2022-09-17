
import { View, Text, ViewProps, FlatList, TouchableOpacity } from 'react-native'
import { DuoInfo } from '../DuoInfo';
import { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { THEME } from '../../theme'
import { GameController } from 'phosphor-react-native'

import { styles } from './styles'

import { DuoMatch } from '../../components/DuoMatch'

interface GameProps {
    id: string;
}

interface GameAdsProps {
    id: string;
    name: string;
    yearsPlaying: number;
    weekDays: [];
    houtsStart: string;
    hourEnd: string;
    useVoiceChannel: boolean;
    createAt: Date;
}

export function DuoCard({ id }: GameProps) {

    const [gameAds, setGameAds] = useState<GameAdsProps[]>([])
    const [discordDuoSelected, setDiscordDuoSelected] = useState('')

    useEffect(() => {
        fetch(`http://192.168.1.108:3333/games/${id}/ads`)
            .then(response => response.json())
            .then(data => {
                setGameAds(data)
                console.log(gameAds)
            })
    }, [])

    async function getDiscordUser(adsId: string) {
        fetch(`http://192.168.1.108:3333/ads/${adsId}/discord`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.discord)
            setDiscordDuoSelected(data.discord)
        })
    }

    // export function DuoCard(){
    return (
        <View>


            <FlatList
                data={gameAds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <DuoInfo title="Nome" subtitle={item.name} />
                        <DuoInfo title="Tempo de jogo" subtitle={`${item.yearsPlaying} ano(s)`} />
                        <DuoInfo title="Disponibilidade" subtitle={`${item.weekDays.length} dias \u2022 ${item.houtsStart} - ${item.hourEnd}`} />
                        <DuoInfo title="Chamada de áudio?" subtitle={`${item.useVoiceChannel ? "Sim" : "Não"}`} colorValue={`${item.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}`} />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => getDiscordUser(item.id)}
                        >
                            <GameController
                                color={THEME.COLORS.TEXT}
                                size={20}
                            />
                            <Text style={styles.buttonText}>Conectar</Text>
                        </TouchableOpacity>
                    </View>
                    // <GameCard
                    //     data={item}
                    //     onPress={() => handleOpenGame(item)}
                    // />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
            />

            <DuoMatch
                        visible={discordDuoSelected.length > 0}
                        discord={discordDuoSelected}
                        onClose={() => setDiscordDuoSelected('')}
                    />
        </View>
        
    )
}

