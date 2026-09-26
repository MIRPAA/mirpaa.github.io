default:
	uv run python generate.py

serve:
	mini_httpd -d ./docs -p 2222 -D
