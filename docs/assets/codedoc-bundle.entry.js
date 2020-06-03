import { getRenderer } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { reloadOnChange } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { GithubSearch } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/misc/github/search.js';
import { ToCToggle } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { TabSelector } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from 'C:/PROJECTS-PERSONAL/victorvogelpoel.coding.blog/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';

const components = {
  'MQVuxXMD09kyw3zvWSQsZA==': ToCPrevNext,
  'ga0JCaPSSxzOu9TLJkipIA==': GithubSearch,
  'TNH8LRzG1Eom99k9jHqp3w==': ToCToggle,
  'SOUEQnnPgW62NUfRd2gVdg==': DarkModeSwitch,
  'HqprtXLtXUFQSjYrJSdoMA==': ConfigTransport,
  '/MWtXIc/eLL6sAIJU4dvNg==': TabSelector,
  'd6ukCsnHDFb0EKEIoC8Z2g==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
