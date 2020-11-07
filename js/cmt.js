function getCommentList(){
  $.ajax({
    type : "GET",
    url : 'http://www.liulongbin.top:3006/api/cmtlist',
    success : function(res){
      if(res.status !== 200){
        return alert("获取图书失败");
      }
    }
  })
}