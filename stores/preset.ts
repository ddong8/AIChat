export const useConversation = defineStore("presetsStore", {
    state: () => ({
        stream: true,
        jailbreakMode: true,
        toneStyle: 'creative', // creative||balanced||precise
        cookies: '',
    }),

    actions: {
        increment() {
            // this.invocationId++;
        },
        async update() {
            // const response = await fetch("http://localhost:8080/v1/bingconversation");
            // const data = await response.json();
            // // 将数据注入到组件中
            // this.conversationId = data.conversationId;
            // this.clientId = data.clientId;
            // this.conversationSignature = data.conversationSignature;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useConversation, import.meta.hot));
}