import React, { useState } from 'react'
import styled from 'styled-components'
import { Recorder } from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'

const StyledRecorderContainer = styled.div`
    max-width: 650px;
    margin: auto;
`

const INITIAL_DATA = {
    url: null,
    blob: null,
    chunks: null,
    duration: {
        h: 0,
        m: 0,
        s: 0
    }
}

const RecorderComponent = () => {
    const [audioData, audioDataSetter] = useState(INITIAL_DATA)

    const handleStop = (data) => {
        console.log("Stopping: ", data)
        audioDataSetter(data)
    }

    const handleUpload = (data) => {
        console.log("Uploading: ", data)
    }

    const handleReset = () => {
        audioDataSetter(INITIAL_DATA)
    }

    return (
        <StyledRecorderContainer>
            <Recorder
                record={true}
                title={"Record Audio"}
                audioURL={audioData.url}
                showUIAudio
                handleAudioStop={data => handleStop(data)}
                handleAudioUpload={data => handleUpload(data)}
                handleReset={() => handleReset()}
                mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
            />
        </StyledRecorderContainer>
    )
}

export default RecorderComponent