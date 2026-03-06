# **Edömér's Archive** <br> *resources/send_in*

<!-- nav -->
## *Navigation:*
- [~](../index.md)
- [Projects](../projects/projects.md)
- [Cheat Sheets](../cheat_sheets/cheat_sheets.md)
- [Resources](resources.md)
<!-- /nav -->

[« Go back](resources.md)

## Send in a useful resource!
<form>
<fieldset>
<legend>Your info</legend>

<label for="name">Your name</label><br>
<input type="text" id="name"><br>

<label for="email">Your email</label><br>
<input type="email" id="email"><br>
</fieldset>

<fieldset>
<legend>The resource</legend>
<label for="name">Resource name / url</label><br>
<input type="text" id="name"><br>
<label for="usefulness">Description</label><br>
<textarea id="usefulness" name="usefulness" rows="4" cols="25" ></textarea><br>
</fieldset>


<fieldset>
<legend>Resource type</legend>
<input type="radio" id="elte" name="type" value="elte" />
<label for="elte">ELTE</label>
<input type="radio" id="study" name="type" value="study" />
<label for="study">Study</label>
<input type="radio" id="ai" name="type" value="ai" />
<label for="ai">AI</label>
<input type="radio" id="free-stuff" name="type" value="free-stuff" />
<label for="free-stuff">Free stuff</label><br>
<input type="radio" id="configs" name="type" value="configs" />
<label for="configs">Configs</label>
<input type="radio" id="web-dev" name="type" value="web-dev" />
<label for="web-dev">Web dev</label>
<input type="radio" id="color-themes" name="type" value="color-themes" />
<label for="color-themes">Color themes</label><br>
<input type="radio" id="other" name="type" value="other" />
<label for="other">Other</label>
</fieldset>

<fieldset>
<legend>Preference</legend>

<input type="checkbox" id="use-name" name="use-name"> <label for="use-name">Do you want your name displayed on my page if I add this resource?</label>


</fieldset>
<fieldset>
<input type="submit" value="Submit">
<input type="reset" value="Clear">
</fieldset>
</form>
