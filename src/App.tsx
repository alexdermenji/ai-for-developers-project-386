import '@mantine/core/styles.css'
import { Container, MantineProvider, Text, Title } from '@mantine/core'

export default function App() {
  return (
    <MantineProvider>
      <Container size="sm" py="xl">
        <Title order={1}>Календарь звонков</Title>
        <Text mt="md">
          Здесь можно будет записаться на 30-минутный звонок.
        </Text>
      </Container>
    </MantineProvider>
  )
}