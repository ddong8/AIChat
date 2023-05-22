export const usePresets = defineStore("presetsStore", {
    state: () => ({
        selectedChat: [1, 2],
        chatObjects: {
            1: {
                name: 'chatgpt'
            },
            2: {
                name: 'bing'
            },
            3: {
                name: 'bard'
            }
        }
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
    import.meta.hot.accept(acceptHMRUpdate(usePresets, import.meta.hot));
}