//template.config({sTag: '<%', eTag: '#>'});
//var tpl1 = '<div><%:=name#></div>';
//console.log('<%#>:', template(tpl1, {name: '不一致也可以哦，更改tag<%#>'})); 
 
//var tpl1 = '<div><%:=name#></div>';
//console.log('<%#>:', template(tpl1, {name: '不一致也可以哦，更改tag<%#>'}));


//template('tpl-list', data)


var utils={
	
	
	//查询方法（包含模糊查询）
	search:function(opts){
		
//		var url = "json/list.json"
//		$.ajax({
//			type:"get",
//			url:url,
//			async:true,
//			success: function(data) {
//				
//				
//				var tpl = $('#tpl-list').html();
//				console.log(tpl);
//				template(tpl, data);
//			}
//		});
	},
	//新增和修改方法（合并为同一个）
	update:function(opts){
		
		box.init({
			title:"删除",
			del:true,
			content:"啊啊啊",
			callback:function(){
				alert("删除成功")
			}
		});
	},
	//删除方法（支持批量删除）
	del:function(opts){
		box.init({
			title:"删除",
			del:true,
			content:"啊啊啊",
			callback:function(){
				alert("删除成功")
			}
		});
	}
}
