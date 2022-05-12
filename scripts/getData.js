$.getJSON("/data/user-commands.json", function(data) {
    var html='';
    html+='<thead>';
    html+='<tr>';
    html+='<th>COMMAND</th>';
    html+='<th>USAGE</th>';
    html+='<th>DESCRIPTION</th>';
    html+='</tr>';
    html+='</thead>';
    html+='<tbody>';
    $.each(data, function(key, value){
    html+='<tr>';
    html+='<td>'+value.name+'</td>';
    html+='<td><xmp>'+value.usage+'</xmp></td>';
    html+='<td>'+value.description+'</td>';
    html+='</tr>';
  });
  html+='</tbody>';
  $('#user-commands').html(html);
});
$.getJSON("/data/sub-commands.json", function(data) {
    var html='';
    html+='<thead>';
    html+='<tr>';
    html+='<th>COMMAND</th>';
    html+='<th>USAGE</th>';
    html+='<th>DESCRIPTION</th>';
    html+='</tr>';
    html+='</thead>';
    html+='<tbody>';
    $.each(data, function(key, value){
    html+='<tr>';
    html+='<td>'+value.name+'</td>';
    html+='<td><xmp>'+value.usage+'</xmp></td>';
    html+='<td>'+value.description+'</td>';
    html+='</tr>';
  });
  html+='</tbody>';
  $('#sub-commands').html(html);
});
$.getJSON("/data/mod-commands.json", function(data) {
    var html='';
    html+='<thead>';
    html+='<tr>';
    html+='<th>COMMAND</th>';
    html+='<th>USAGE</th>';
    html+='<th>DESCRIPTION</th>';
    html+='</tr>';
    html+='</thead>';
    html+='<tbody>';
    $.each(data, function(key, value){
    html+='<tr>';
    html+='<td>'+value.name+'</td>';
    html+='<td><xmp>'+value.usage+'</xmp></td>';
    html+='<td>'+value.description+'</td>';
    html+='</tr>';
  });
  html+='</tbody>';
  $('#mod-commands').html(html);
});
