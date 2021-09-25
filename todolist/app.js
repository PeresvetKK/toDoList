Vue.createApp({
	data(){
		return{
			valueInput: '',
			needDoList: [], // после того, как пользователь нажал на кнопку "add task", мы должны получить объект
			completeList: [],
		};
	},
	methods: {
		//работа со строкой ввода и кнопкой add task
		handlyInput(event){//наши данные будут отправляться. Это что-то типа ящика, где будет храниться строка
			this.valueInput = event.target.value; // элемент valueInput будет рабоать с событием. Это для строки ввода названия дела
		},

		// при нажатии на кнопку add task мы вставляем li и все остальные компоненты с вставленным значением valueInput
		addTask(){ // это для кнопки add task. переходим в html и указываем, куда будут передоваться данные
			if(this.valueInput === ''){return}; // если строка пустая, мы ничего не делаем
			this.needDoList.push({ //при нажатии add task мы вставляем тег li вместе со всем остальными
				title: this.valueInput, // title перенесёт значение valueInput
				id: Math.random() //
			});
			this.valueInput = '';
		},

		//данный код отвечает, что будет происходить с do check
		doCheck(index, type){
			if (type === "need"){
				const completeMask = this.needDoList.splice(index, 1);
				this.completeList.push(...completeMask);
			} else{
				const noCompleteMask = this.completeList.splice(index, 1);
				this.needDoList.push(...noCompleteMask );
			}
		},
		removeMask (index, type){
			const toDoList = type === "need" ? this.needDoList: this.completeList;
			toDoList.splice(index, 1);
		}
	}
}).mount("#app");