{
    "manifest_version": 2,
    "name": "CFC to those bee guys",
    "version": "1.0",
    "description": "Replaces the text 'CFC' with 'those bee guys'.",
    "content_scripts": 
    [
        {
            "matches": ["*://*/*"],
            "js": ["content_script.js"],
            "run_at": "document_end"
        }
    ]
}
