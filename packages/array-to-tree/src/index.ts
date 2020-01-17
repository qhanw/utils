import isArray from '@pansy/is-array';
import isObject from '@pansy/is-object';
import isEmptyObject from '@pansy/is-empty-object';

// https://www.npmjs.com/package/array-to-tree
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/139
// https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
// https://jsfiddle.net/alexandrupausan/qjxpLhfu/
// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/139

// tree to array
// https://stackoverflow.com/questions/29582431/convert-binary-tree-to-array-in-c
// https://danmartensen.svbtle.com/converting-a-tree-to-a-list-in-javascript
// https://codepen.io/anon/pen/bVGNpZ?editors=0010
// https://stackoverflow.com/questions/32609284/construct-flat-array-from-tree-of-objects

export function convert(
  list: any[],
  { id = 'id', pid = 'pid' }: { id: string | number; pid: string | number }
) {
  const res = [];
  // eslint-disable-next-line no-shadow,no-sequences
  const map = list.reduce((res, v) => ((res[v[id]] = v), res), {});
  // eslint-disable-next-line no-restricted-syntax
  for (const item of list) {
    //
    if (!item[pid] || item.children) {
      //
      res.push(item);
      continue;
    }
    //
    if (item[pid] in map) {
      //
      const parent = map[item[pid]];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}

// Reference: https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
// export function arrayToTree(list: any[]) {
//   var map = {},
//     node,
//     roots = [],
//     i;
//   for (i = 0; i < list.length; i += 1) {
//     map[list[i].id] = i; // initialize the map
//     list[i].children = []; // initialize the children
//   }
//   for (i = 0; i < list.length; i += 1) {
//     node = list[i];
//     if (node.parentId !== '0') {
//       // if you have dangling branches check that map[node.parentId] exists
//       list[map[node.parentId]].children.push(node);
//     } else {
//       roots.push(node);
//     }
//   }
//   return roots;
// }

export default convert(config, { id: 'key', pid: 'pKey' });
