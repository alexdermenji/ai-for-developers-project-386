import '@mantine/core/styles.css'
import { Anchor, Button, Container, MantineProvider, Stack, Text, Title } from '@mantine/core'

export default function App() {
  const isBookingPage = window.location.pathname === '/book'

  return (
    <MantineProvider forceColorScheme="light">
      <Container component="main" size="sm" py={{ base: 48, sm: 96 }}>
        <Stack gap="lg" align="flex-start">
          {isBookingPage ? (
            <>
              <Title order={1}>Запись на звонок</Title>
              <Text size="lg" c="dimmed">Выбор времени скоро появится</Text>
              <Anchor href="/">На главную</Anchor>
            </>
          ) : (
            <>
              <Title order={1}>Календарь звонков</Title>
              <Text size="lg" c="dimmed">Выберите удобное время для 30-минутного звонка</Text>
              <Button component="a" href="/book" size="lg">Записаться на звонок</Button>
            </>
          )}
        </Stack>
      </Container>
    </MantineProvider>
  )
}
