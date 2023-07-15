const icons = [
    { 
        name: "MongoDB", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="256" height="549" viewBox="0 0 256 549"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"/></svg>
    },
    { 
        name: "Express.js", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"/></svg>
    },
    { 
        name: "React.js", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
    },
    { 
        name: "Node.js", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/></svg>
    },
    { 
        name: "Github", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    }, 
    { 
        name: "MySQL", 
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="256" height="133" viewBox="0 0 204.8 105.765"><path d="M0 96.334h6.747V69.7l10.445 23.227c1.232 2.8 2.92 3.806 6.228 3.806s4.93-.995 6.164-3.806L40.03 69.7v26.644h6.748v-26.6c0-2.595-1.04-3.85-3.18-4.498-5.125-1.6-8.564-.216-10.12 3.244l-10.25 22.923L13.3 68.48c-1.492-3.46-4.995-4.844-10.12-3.244C1.038 65.885 0 67.14 0 69.734v26.6zm52.386-21.686h6.745v14.68c-.063.798.256 2.67 3.952 2.727 1.886.03 14.554 0 14.672 0v-17.48h6.76c.03 0-.007 23.834-.006 23.936.037 5.878-7.294 7.155-10.672 7.254H52.533v-4.54l21.342-.001c4.342-.46 3.83-2.617 3.83-3.344v-1.77h-14.34c-6.672-.06-10.92-2.973-10.973-6.323-.005-.3.144-14.995-.004-15.14z" fill="#00618a"/><path d="M89.716 96.334h19.398c2.27 0 4.477-.475 6.23-1.298 2.92-1.34 4.347-3.157 4.347-5.536v-4.93c0-1.947-1.622-3.763-4.8-4.974-1.687-.65-3.763-.995-5.774-.995h-8.175c-2.724 0-4.022-.822-4.346-2.638-.065-.216-.065-.4-.065-.606v-3.07c0-.173 0-.347.065-.563.324-1.384 1.038-1.774 3.438-2 .195 0 .454-.044.65-.044h19.268v-4.497h-18.944c-2.725 0-4.152.173-5.45.562C91.532 67 89.78 69 89.78 72.46v3.936c0 3.028 3.44 5.623 9.212 6.228.65.043 1.298.086 1.946.086h7.007c.26 0 .52 0 .714.044 2.14.173 3.05.562 3.698 1.34.4.4.52.78.52 1.2v3.936c0 .476-.324 1.082-.973 1.6-.584.52-1.557.865-2.855.952-.26 0-.454.043-.713.043h-18.62v4.498zm72.064-7.828c0 4.628 3.438 7.223 10.38 7.742a29.45 29.45 0 0 0 1.946.086h17.582v-4.498h-17.712c-3.957 0-5.45-.995-5.45-3.374v-23.27h-6.747v23.312zm-37.785.234V72.705c0-4.074 2.86-6.545 8.516-7.325a12.94 12.94 0 0 1 1.821-.13h12.807a13.87 13.87 0 0 1 1.886.13c5.656.78 8.516 3.25 8.516 7.325V88.74c0 3.305-1.215 5.074-4.015 6.227l6.646 6h-7.834l-5.377-4.854-5.413.343h-7.216c-1.235 0-2.535-.174-3.966-.564-4.3-1.17-6.37-3.424-6.37-7.152zm7.283-.4c0 .217.065.433.13.694.4 1.864 2.145 2.904 4.8 2.904h6.13l-5.63-5.083h7.834l4.9 4.433c.905-.482 1.5-1.22 1.7-2.167.065-.216.065-.433.065-.65V73.096c0-.173 0-.4-.065-.607-.4-1.733-2.146-2.73-4.746-2.73H136.22c-3 0-4.94 1.3-4.94 3.337v15.256z" fill="#e48e00"/><g fill="#00618a"><path d="M197.624 57.73c-4.147-.112-7.316.273-10.024 1.415-.77.325-1.997.333-2.123 1.298.423.443.49 1.105.825 1.65.647 1.047 1.74 2.45 2.713 3.184 1.064.803 2.16 1.663 3.303 2.36 2.03 1.238 4.296 1.945 6.25 3.184 1.152.73 2.296 1.65 3.42 2.476.555.408.93 1.042 1.65 1.297v-.118c-.38-.483-.477-1.147-.825-1.65l-1.533-1.533c-1.5-2-3.402-3.737-5.425-5.19-1.613-1.158-5.224-2.722-5.897-4.6l-.118-.118c1.144-.13 2.483-.543 3.54-.825 1.773-.475 3.358-.353 5.19-.825l2.477-.708v-.472c-.926-.95-1.586-2.207-2.595-3.066-2.64-2.25-5.523-4.495-8.49-6.37-1.646-1.04-3.68-1.714-5.425-2.595-.587-.296-1.618-.45-2.005-.944-.916-1.168-1.415-2.65-2.122-4-1.48-2.85-2.934-5.964-4.246-8.963-.895-2.045-1.48-4.062-2.594-5.897-5.355-8.804-11.12-14.118-20.048-19.34-1.9-1.11-4.187-1.55-6.605-2.123l-3.892-.236c-.792-.33-1.616-1.3-2.36-1.77-2.958-1.87-10.545-5.933-12.736-.6-1.383 3.373 2.067 6.664 3.302 8.374.866 1.2 1.976 2.543 2.594 3.892.407.886.478 1.775.826 2.713.857 2.3 1.603 4.823 2.712 6.958.56 1.08 1.178 2.218 1.887 3.184.435.593 1.18.854 1.297 1.77-.728 1.02-.77 2.6-1.18 3.892-1.843 5.812-1.148 13.035 1.533 17.337.823 1.32 2.76 4.152 5.425 3.066 2.33-.95 1.8-3.89 2.477-6.486.15-.59.058-1.02.354-1.415v.118l2.123 4.245c1.57 2.53 4.36 5.175 6.722 6.96 1.225.925 2.2 2.525 3.774 3.066v-.118h-.118c-.307-.48-.787-.677-1.18-1.06-.923-.905-1.95-2.03-2.713-3.066-2.15-2.918-4.048-6.11-5.778-9.435-.826-1.587-1.545-3.338-2.24-4.953-.268-.623-.265-1.564-.825-1.887-.763 1.184-1.887 2.14-2.477 3.538-.944 2.234-1.066 4.958-1.415 7.784-.207.074-.115.023-.236.118-1.642-.396-2.22-2.087-2.83-3.538-1.544-3.67-1.83-9.576-.472-13.798.35-1.092 1.94-4.534 1.297-5.543-.307-1.007-1.32-1.6-1.887-2.36-.7-.95-1.402-2.204-1.887-3.302-1.264-2.86-1.854-6.07-3.184-8.963-.636-1.382-1.71-2.78-2.594-4-.978-1.36-2.073-2.364-2.83-4-.27-.585-.636-1.52-.236-2.123a.93.93 0 0 1 .708-.708c.684-.527 2.59.175 3.302.472 1.89.786 3.47 1.534 5.072 2.595.77.5 1.547 1.496 2.476 1.77h1.06c1.66.382 3.52.12 5.07.59 2.742.833 5.198 2.13 7.43 3.538 6.798 4.292 12.355 10.402 16.157 17.7.612 1.173.876 2.294 1.415 3.538 1.087 2.5 2.456 5.093 3.538 7.547 1.08 2.45 2.13 4.92 3.656 6.958.802 1.07 3.9 1.646 5.307 2.24.987.417 2.603.852 3.538 1.415 1.785 1.077 3.515 2.36 5.19 3.54.837.59 3.41 1.883 3.538 2.948z"/><path d="M144.91 12.798c-.865-.016-1.476.094-2.123.236v.118h.118c.412.848 1.14 1.393 1.65 2.123l1.18 2.476.118-.118c.73-.515 1.065-1.338 1.06-2.595-.293-.308-.336-.694-.59-1.062-.337-.49-1-.768-1.415-1.18z" fill-rule="evenodd"/></g><path d="M194.855 91.708c0 2.97 2.347 4.972 4.972 4.972s4.972-2.002 4.972-4.972-2.347-4.972-4.972-4.972-4.972 2.002-4.972 4.972zm8.83 0c0 2.254-1.723 3.938-3.86 3.938-2.16 0-3.86-1.684-3.86-3.938s1.698-3.938 3.86-3.938c2.135 0 3.86 1.684 3.86 3.938zm-2.52 2.838h1.113l-1.63-2.492c.875-.093 1.537-.518 1.537-1.552 0-1.154-.73-1.63-2.134-1.63h-2.215v5.675h.955v-2.453h.888l1.485 2.453zm-2.374-3.25v-1.63h1.1c.57 0 1.26.106 1.26.77 0 .795-.623.862-1.34.862h-1.02z" fill="#e48e00" fill-rule="evenodd"/></svg>
    },
    { 
        name: "PHP-Black",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.601h-.116c-1.61 0-3.18.175-4.69.507l.144-.027a16.125 16.125 0 0 0-3.91 1.343l.094-.042a8.123 8.123 0 0 0-2.57 1.93l-.007.008A3.6 3.6 0 0 0 0 11.684v.004c.019.914.374 1.741.946 2.367l-.002-.003a8.105 8.105 0 0 0 2.529 1.917l.048.021a15.7 15.7 0 0 0 3.71 1.282l.106.019c1.366.305 2.936.48 4.546.48h.123H12h.116c1.61 0 3.18-.175 4.69-.507l-.144.027a16.125 16.125 0 0 0 3.91-1.343l-.094.042a8.123 8.123 0 0 0 2.57-1.93l.007-.008A3.6 3.6 0 0 0 24 11.688v-.004a3.608 3.608 0 0 0-.947-2.371l.002.003a8.105 8.105 0 0 0-2.529-1.917l-.048-.021a15.7 15.7 0 0 0-3.71-1.282l-.106-.019a21.212 21.212 0 0 0-4.546-.48h-.123h.006zm-3.12 7.264c-.131.119-.28.221-.442.301l-.011.005a2.916 2.916 0 0 1-.482.179l-.021.005a1.723 1.723 0 0 1-.579.099h-.024h.001H5.35l-.32 1.963H3.583l1.28-6.675h2.773l.062-.001c.36 0 .706.063 1.026.179l-.021-.007c.295.108.546.276.748.489l.001.001c.175.223.3.493.354.789l.002.011a2.932 2.932 0 0 1-.015 1.059l.003-.019a2.82 2.82 0 0 1-.142.485l.007-.019q-.086.221-.184.417q-.122.196-.27.393a2.164 2.164 0 0 1-.317.343l-.003.002zm4.172.589l.565-2.822c.024-.107.038-.229.038-.355l-.002-.078v.004a.426.426 0 0 0-.111-.283a.671.671 0 0 0-.241-.134l-.005-.001a1.388 1.388 0 0 0-.418-.062l-.051.001h.002h-1.126l-.736 3.73H9.544l1.28-6.48h1.423l-.343 1.767h1.28l.073-.001c.331 0 .653.041.961.117l-.027-.006c.249.055.466.172.641.332l-.001-.001a.84.84 0 0 1 .306.498l.001.005a1.945 1.945 0 0 1-.04.787l.003-.014l-.589 2.994zm7.902-2.184c-.04.181-.082.328-.132.473l.009-.031c-.054.159-.12.297-.201.425l.005-.008a1.812 1.812 0 0 1-.248.408l.003-.004c-.098.122-.203.23-.317.329l-.003.003c-.131.119-.28.221-.442.301l-.011.005a2.916 2.916 0 0 1-.482.179l-.021.005a1.723 1.723 0 0 1-.579.099h-.024h.001h-1.972l-.343 1.959h-1.423l1.28-6.675h2.749l.073-.001c.365 0 .716.063 1.041.18l-.022-.007c.287.104.529.272.718.488l.002.002c.19.222.325.497.378.799l.002.01a2.763 2.763 0 0 1-.04 1.076l.004-.019zm-2.7-1.547h-.978l-.513 2.749h.908c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012a1.877 1.877 0 0 0 .036-.649l.001.009a.812.812 0 0 0-.161-.419l.001.002a1.116 1.116 0 0 0-.409-.243l-.008-.002a1.982 1.982 0 0 0-.689-.096h.003zm-11.19 0h-.978l-.515 2.749h.91c.25 0 .496-.023.734-.066l-.025.004c.204-.036.386-.109.546-.212l-.006.003c.136-.122.25-.263.339-.421l.004-.008c.103-.188.18-.407.219-.638l.002-.012a1.877 1.877 0 0 0 .036-.649l.001.009a.812.812 0 0 0-.161-.419l.001.002a1.116 1.116 0 0 0-.409-.243l-.008-.002a1.982 1.982 0 0 0-.689-.096h.003z"/></svg>
    },
    {
        name: "PHP",
        svg: <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 32 32" width="64"><defs><clipPath id="A"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162"/></clipPath><radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="B" r="1" spreadMethod="pad"><stop offset="0" stop-color="#aeb2d5"/><stop offset=".3" stop-color="#aeb2d5"/><stop offset=".75" stop-color="#484c89"/><stop offset="1" stop-color="#484c89"/></radialGradient><clipPath id="C"><path d="M0 324h576V0H0v324z"/></clipPath><clipPath id="D"><path d="M0 324h576V0H0v324z"/></clipPath></defs><g transform="matrix(.05787 0 0 -.057079 -.666665 24.945283)"><g clip-path="url(#A)"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162" fill="url(#B)"/></g><g clip-path="url(#C)"><path d="M288 27.36c146.73 0 265.68 60.28 265.68 134.64S434.73 296.64 288 296.64 22.32 236.36 22.32 162 141.27 27.36 288 27.36" fill="#777bb3"/></g><g clip-path="url(#D)"><path d="M161.734 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zM98.67 77.557c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.63 2.48l28.328 145.75a3 3 0 0 0 2.945 2.427h61.054c19.188 0 33.47-5.2 42.447-15.487 9.025-10.33 11.812-24.772 8.283-42.92-1.436-7.394-3.906-14.26-7.34-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428H98.67z"/><path d="M159.224 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545-5.162-3.974-13.554-5.988-24.94-5.988H149.7l9.523 49zm28.83 35H127a6 6 0 0 1-5.889-4.855L92.783 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.588 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.354 13.984 5.752 5.292 10.5 11.232 14.08 17.657s6.17 13.594 7.668 21.302c3.715 19.104.697 34.402-8.97 45.466-9.572 10.958-24.614 16.514-44.706 16.514m-45.633-90h19.313c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.1 10.832 1.144 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.856-61m45.633 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75L127 226.307h61.055" fill="#fff"/><path d="M311.583 116.307c-.896 0-1.745.4-2.314 1.092s-.802 1.6-.63 2.48l12.53 64.49c1.192 6.133.898 10.535-.827 12.395-1.056 1.137-4.228 3.044-13.607 3.044h-22.702l-15.755-81.072a3 3 0 0 0-2.945-2.428h-31.5a3 3 0 0 0-2.945 3.572l28.328 145.75a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572l-6.836-35.178h24.422c18.605 0 31.22-3.28 38.57-10.028 7.5-6.884 9.827-17.89 6.947-32.72l-13.18-67.825a3 3 0 0 0-2.945-2.428h-32z"/><path d="M293.66 271.057h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.75a6 6 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855l15.283 78.645h20.23c9.363 0 11.328-2 11.407-2.086.568-.61 1.315-3.44.082-9.78l-12.53-64.49a6 6 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855l13.18 67.825c3.093 15.92.447 27.864-7.86 35.5-7.928 7.28-21.208 10.82-40.6 10.82h-20.784l6.143 31.605a6 6 0 0 1-5.89 7.145m0-6l-7.53-38.75h28.062c17.657 0 29.836-3.082 36.54-9.238s8.71-16.14 6.032-29.938l-13.18-67.824h-32l12.53 64.488c1.426 7.336.902 12.34-1.574 15.008s-7.746 4.004-15.805 4.004H281.56l-16.226-83.5h-31.5l28.328 145.75h31.5" fill="#fff"/><path d="M409.55 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.86 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zm-63.062-67.75c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48l28.328 145.75a3 3 0 0 0 2.946 2.427h61.053c19.19 0 33.47-5.2 42.448-15.487 9.025-10.33 11.81-24.77 8.283-42.92-1.438-7.394-3.907-14.26-7.342-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93H388.24l-7.057-36.322a3 3 0 0 0-2.946-2.428h-31.75z"/><path d="M407.04 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.63-2.914 3.125-9.058 1.435-17.766-1.898-9.75-5.417-16.664-10.458-20.546-5.162-3.974-13.554-5.988-24.94-5.988h-12.033l9.522 49zm28.83 35h-61.054a6 6 0 0 1-5.889-4.855L340.6 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.587 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.356 13.986 5.752 5.29 10.488 11.23 14.078 17.655s6.17 13.594 7.668 21.302c3.715 19.105.697 34.403-8.97 45.467-9.572 10.957-24.613 16.513-44.706 16.513m-45.632-90h19.312c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.102 10.832 1.145 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.855-61m45.632 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75l28.328 145.75h61.054" fill="#fff"/></g></g></svg>
    },
    {
        name: "HTML",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"/><path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"/><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"/></svg>
    },
    {
        name: "CSS",
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"/><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"/><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"/><path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"/><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"/></svg>
    },
]

export default icons;