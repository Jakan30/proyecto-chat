const conversations = [
    {
        contact: "Juan",
        messages: [
            { sender: "receiver", text: "Hola, ¿cómo estás?", time: "12:30 PM" },
            { sender: "sender", text: "Estoy bien, gracias.", time: "12:32 PM" },
        ]
    },
    {
        contact: "María",
        messages: [
            { sender: "receiver", text: "¿Te gustaría ir al cine?", time: "Ayer" },
            { sender: "sender", text: "Claro, suena bien.", time: "Ayer" },
        ]
    },
    {
        contact: "Pedro",
        messages: [
            { sender: "receiver", text: "¿Cuándo tenemos clase?", time: "09/18" },
            { sender: "sender", text: "El lunes a las 10.", time: "09/18" },
        ]
    },
    {
        contact: "Luisa",
        messages: [
            { sender: "receiver", text: "¿Te ayudo con el proyecto?", time: "09/17" },
            { sender: "sender", text: "Sí, por favor.", time: "09/17" },
        ]
    },
    {
        contact: "Carlos",
        messages: [
            { sender: "receiver", text: "Nos vemos mañana.", time: "09/16" },
            { sender: "sender", text: "Perfecto, a las 5.", time: "09/16" },
        ]
    }
];

document.getElementById('toggleConversations').addEventListener('click', function() {
    const conversationList = document.getElementById('conversationList');
    conversationList.style.display = conversationList.style.display === 'none' ? 'block' : 'none';
});

// Al hacer clic en una conversación, carga los mensajes
document.querySelectorAll('.conversation').forEach(item => {
    item.addEventListener('click', function() {
        const contact = this.getAttribute('data-contact');
        this.classList.remove('unread');
        loadMessages(contact);
    });
});

// Función para cargar mensajes
function loadMessages(contact) {
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.innerHTML = ''; // Limpiar mensajes previos
    const chat = conversations.find(c => c.contact === contact);
    
    chat.messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;
        messageDiv.textContent = message.text;
        messagesContainer.appendChild(messageDiv);
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
}

// Funcionalidad de envío de mensaje
document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messagesContainer');

    if (messageInput.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.className = 'message sender';
        newMessage.textContent = messageInput.value;
        messagesContainer.appendChild(newMessage);
        messageInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
    }
});

// Funcionalidad de búsqueda
document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const conversations = document.querySelectorAll('.conversation');
    
    conversations.forEach(convo => {
        const text = convo.textContent.toLowerCase();
        convo.style.display = text.includes(filter) ? '' : 'none';
    });
});
