

const MetaStyle = () => {
      return (
 <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="./tailwind.css" />
      <title>Chi Desk</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        html {\n            font-size: 14px;\n            line-height: 1.285;\n            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n                Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial,\n                sans-serif;\n        }\n\n        html,\n        body {\n            width: 100%;\n            height: 100%;\n        }\n\n        /* can be configured in tailwind.config.js */\n        .group:hover .group-hover\\:block {\n            display: block;\n        }\n\n        .focus\\:cursor-text:focus {\n            cursor: text;\n        }\n\n        .focus\\:w-64:focus {\n            width: 16rem;\n        }\n\n        /* zendesk styles */\n        .h-16 {\n            height: 50px;\n        }\n\n        .bg-teal-900 {\n            background: #03363d;\n        }\n\n        .bg-gray-100 {\n            background: #000;\n        }\n\n        .hover\\:border-green-500:hover {\n            border-color: #78a300;\n        }\n    ',
        }}
      />
 </div>
      );
};

export default MetaStyle;