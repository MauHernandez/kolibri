Device Owner
============

Create Device Owner Account
~~~~~~~~~~~~~~~~~~~~~~~~~~~

A **Device Owner** is a “super-user” for your Kolibri installation, and a **Facility** is a group of users and their associated data.

In order to manage Kolibri content channels, data and users, you must first create a **Device Owner** account and the **Facility**. The **Device Owner** account registration page appears when you start the server for the first time  after the installation of Kolibri and open the browser at http://127.0.0.1:8080/ (the default URL).

.. image:: img/wizard.png
  :alt: create device owner form


#. Enter the required information for the **Device Owner** account (username, password, name of the facility). Fields marked with an asterisk (*) are required.
#. Select **Create and get started**.


Adding a New Device Owner
----------------------

In case you need to create another super-user (e.g. you lost the password for the old one), run the following command (open the ``cmd.exe`` command prompt in Windows or terminal in linux):

.. code-block:: bash

  kolibri manage createsuperuser

You will be prompted to input the **Username** and **Password** and the new **Device Owner** user account will be created.


.. include:: manage_facility.rst


.. include:: manage_users.rst


.. include:: manage_classes.rst


.. include:: manage_data.rst


.. include:: manage_content.rst


.. include:: get_support.rst

