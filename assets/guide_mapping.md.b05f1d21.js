import{o as n,c as a,K as e}from"./vendor.22415b13.js";const o={components:{}},s='{"title":"文件映射","description":"","frontmatter":{},"headers":[{"level":2,"title":"文件映射","slug":"文件映射"},{"level":3,"title":"1. 根据map.path映射","slug":"_1-根据map-path映射"},{"level":3,"title":"2. locale 后缀映射规则","slug":"_2-locale-后缀映射规则"}],"relativePath":"guide/mapping.md","lastUpdated":1610541280978}',p=e('<h2 id="文件映射"><a class="header-anchor" href="#文件映射" aria-hidden="true">#</a> 文件映射</h2><p>运行<code>yarn dev</code>后可以看到，VFC 会在 docs 目录里面生成一个<code>.temp</code>文件，<code>.temp</code>是 <strong>当前 root 下所有文件</strong> + <strong><code>config.srcIncludes</code>里面的<code>.md</code>文件</strong> 映射结果。</p><p>例如<code>yarn create vlib</code>生成的<code>.temp</code>文件结构如下：</p><div class="language-"><pre><code>.temp\n├── components\n│   ├── button\n│   │   └── index.md\n│   └── loading\n│       └── index.md\n├── en\n│   ├── components\n│   │   ├── button\n│   │   │   └── index.md\n│   │   └── loading\n│   │       └── index.md\n│   └── index.md\n├── index.md\n└── package.json\n</code></pre></div><p>文件映射规则有两个:</p><h3 id="_1-根据map-path映射"><a class="header-anchor" href="#_1-根据map-path映射" aria-hidden="true">#</a> 1. 根据<code>map.path</code>映射</h3><p>VFC 在启动服务前会根据<code>config.srcIncludes</code>(默认<code>[src]</code>)的目录，来扫描里面的<code>.md</code>文件。识别<code>.md</code>文件的<code>Front Matter</code>的<code>map.path</code>字段，这个 path 就是映射的目标地址。</p><p>例如:</p><p><code>src\\loading\\index.en-US.md</code></p><div class="language-"><pre><code>---\nmap:\n  path: /components/loading\n---\n...\n</code></pre></div><p>会被映射成<code>.temp\\en\\components\\loading\\index.md</code>。</p><p>如果<code>src\\loading\\index.en-US.md</code>缺少<code>Front Matter</code>的<code>map.path</code>字段，会以当前路径映射到<code>.temp</code>里面，即<code>.temp\\en\\components\\loading\\index.md</code>。</p><h3 id="_2-locale-后缀映射规则"><a class="header-anchor" href="#_2-locale-后缀映射规则" aria-hidden="true">#</a> 2. locale 后缀映射规则</h3><p>VFC 会根据 locale 配置生成一个<code>lang</code> -&gt; <code>path</code>的映射表。</p><p>例如模板项目里面的 locale 配置如下： docs.vitepress\\config.js</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n  locales<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;/en/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>会生成这样的一个映射表:</p><div class="language-js"><pre><code><span class="token punctuation">{</span> <span class="token string">&#39;zh-CN: &#39;</span><span class="token operator">/</span><span class="token string">&#39;, &#39;</span>en<span class="token operator">-</span><span class="token constant">US</span><span class="token string">&#39;: &#39;</span><span class="token operator">/</span>en<span class="token operator">/</span><span class="token string">&#39;, &#39;</span><span class="token string">&#39;: &#39;</span><span class="token operator">/</span>&#39; <span class="token punctuation">}</span>\n</code></pre></div><p>映射例子:</p><p><code>/comp/foo.zh-CN.md</code> -&gt; <code>/comp/foo.md</code></p><p><code>/comp/foo.en-US.md</code> -&gt; <code>/en/comp/foo.md</code></p><p><code>/comp/foo.md -&gt;</code> <code>/comp/foo.md</code></p>',22);o.render=function(e,o,s,c,t,d){return n(),a("div",null,[p])};export default o;export{s as __pageData};
