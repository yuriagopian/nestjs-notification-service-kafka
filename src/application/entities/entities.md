## Entities

- Adicionamos uma interface que vai definir como o contrato desta entidade, quais campos ela vai ter e como devem ser setados

- Criamos uma classe que vai ter um atributo chamado props, onde o mesmo recebera todas as propriedades da interface

- No constructor enviamos setamos no contexto global as propriedades recebidas do tipo da interface

### Exemplo de funcionamento

```bash
const notification = new Notification({
category: 'teste',
content: 'teste',
createdAt: new Date(),
recipientId: 'kaiopkjsa',
});

// Não conseguimos pois é read only, agora se adicionarmos um seter conseguiriamos
notification.createdAt = new Date();

// conseguimos
notification.recipientId = 'oipsajka';
```
