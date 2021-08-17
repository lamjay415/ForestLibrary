const dataTree = require("data-tree");


const tree = dataTree.create();

tree.insert(183);
tree.insert([34, 565, 78]);
tree.insert({
  key: '#berries',
  value: { name: 'Apple', color: 'Red'}
});
tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});
const yellowApple = {
  key: '#yellowapple',
  value: { name:'Yellow Apple', color: 'Yellow' }
};

tree.insertTo(function (data) {
    return data.key === "#apple"
}, yellowApple);

const node = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

const greenApple2 = {
  key: '#greenapple',
  value: { name:'Green Apple', color: 'Green' }
};

const node2 = tree.insert({
  key: '#apple',
  value: { name: 'Apple', color: 'Red'}
});

tree.remove(node);
tree.insertToNode(node2, greenApple2);

// const node3 = tree.traverser().searchBFS(function(data){
//   return data.key === '#apple';
// });

const node4 = tree.traverser().searchDFS(function(data){
  return data.key === '#apple';
});

const exported = tree.export(function(data){
 return { name: data.name,
        value: data.value };
});
